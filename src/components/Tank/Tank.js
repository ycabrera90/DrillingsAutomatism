import React, { Component } from "react";
import { formatNumber } from "../../Funciones";
import InputsNiveles from "./subcomponentes/InputsNiveles";
import { connect } from "react-redux";
import { changeState } from "../../actions/mainActions";
import BotonesAplicar from "./subcomponentes/BotonesAplicar";
import AES from "crypto-js/aes";
import Bateria from "./Bateria";
import _ from "lodash";

export class Tanque extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      altura: 0,
      altura_max: 0,
      inf: 0,
      sup: 0,
      cambio: false,
      visible: false,
      limite_change: false,
      mostrado: false,
      pass: "",
      pass_err: false,
      pass_msg: ""
    };
  }

  componentDidMount() {
    if (this.props.data) {
      this.actualizarDatos();
      this.cargarTanque();
    }
  }

  actualizarDatos() {
    const { H_MAX_TQ, H_TQ, dlgid, L_MIN_ALARM, L_MAX_ALARM } = this.props.data;
    // guardo las variables en el state
    this.setState(
      {
        id: dlgid,
        altura: parseFloat(H_TQ),
        altura_max: parseFloat(H_MAX_TQ),
        inf: parseFloat(L_MIN_ALARM) || 0,
        sup: parseFloat(L_MAX_ALARM) || 0,
        cambio: false,
        pass_err: false,
        pass_msg: ""
      },
      () => {
        // si cambia alguna variable actualizo el tanque de FusionCharts
        if (
          !this.tank ||
          this.state.altura_max !== H_MAX_TQ ||
          this.state.altura !== H_TQ
        ) {
          this.cargarTanque();
        }
      }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // si cambio de esquema de color actualizo el tanque
    if (prevProps.white !== this.props.white) {
      this.cargarTanque();
    }

    if (!_.isEqual(prevProps.data, this.props.data)) {
      this.actualizarDatos();
    }

    // evito que si al cambiar de sistema desde uno que no tenga tanque
    // se deje de mostrar
    if (
      (prevState.altura !== this.state.altura && !this.state.altura) ||
      (prevState.altura_max !== this.state.altura_max && !this.state.altura_max)
    ) {
      this.tank = null;
    }

    // si cambio de sistema oculto los carteles de error
    if (
      this.props.match.params.id != prevProps.match.params.id &&
      (this.state.mostrado || this.state.limite_change)
    ) {
      this.setState({
        mostrado: false,
        limite_change: false
      });
    }

    // si hay algun problema con los limites muestro los carteles de error
    if (this.props.data.SW1 == "AUTO") {
      if (
        parseFloat(this.props.data.LMIN_TQ) <
        parseFloat(this.props.data.L_MIN_ALARM) ||
        parseFloat(this.props.data.LMAX_TQ) >
        parseFloat(this.props.data.L_MAX_ALARM)
      ) {
        if (!this.state.mostrado) {
          this.setState({
            mostrado: true,
            limite_change: true,
            visible: true
          });
        }
      } else if (this.state.mostrado) {
        this.setState({
          mostrado: false
        });
      }
    } else if (this.state.mostrado) {
      this.setState({
        mostrado: false
      });
    }

    // volver a revisar la hora si cambio algun parametro
    // var variables = "int, sup".split(", ");
    // var cambio = false;
    // variables.forEach(variable => {
    //   if (this.state[variable] != prevState[variable]) {
    //     cambio = true;
    //   }
    // });

    // if (cambio) {
    //   this.revisarHora();
    // }
  }

  componentWillUnmount() {
    // elimino el timeout
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  cargarTanque() {
    const { white } = this.props;
    const { id, altura, altura_max } = this.state;

    // si aun no cargan los datos de redux o la libreria espero y lo vuelvo a intentar
    if (id === "" || !window.FusionCharts) {
      this.timeout = setTimeout(() => {
        this.cargarTanque();
      }, 100);
      return null;
    }

    if (
      isNaN(altura) ||
      isNaN(altura_max) ||
      this.props.data.ERR_SENSOR_TQ == "SI"
    ) {
      this.tank = null;
      return null;
    }

    var dataSource = {
      chart: {
        lowerlimit: "0",
        upperlimit: `${altura_max.toFixed(2)}`,
        lowerlimitdisplay: "0",
        upperlimitdisplay: `${altura_max.toFixed(2)} Mts`,
        numbersuffix: "Mts",
        cylfillcolor: "#007de4",
        plottooltext: `Altura: <b>${altura.toFixed(2)} mts</b>`,
        theme: "fusion",
        baseFont: "Poppins, sans-serif",
        bgColor: white ? "#ffffff" : "#353c48",
        bgAlpha: "100",
        baseFontColor: white ? "#000000" : "#ffffff",
        toolTipBgColor: "#353c48",
        toolTipBgAlpha: "90",
        toolTipBorderColor: "#3c4452",
        toolTipColor: "#ffffff",
        minorTMColor: !white ? "#bfbfbf" : "#000000",
        majorTMColor: !white ? "#bfbfbf" : "#000000",
        showBorder: "0"
      },
      value: `${altura}`
    };

    // si ya existe el tanque en la pantalla, solo edito los datos

    if (this.tank) {
      this.tank.setJSONData(dataSource);
    } else {
      this.tank = new window.FusionCharts({
        type: "cylinder",
        renderAt: id,
        width: "200",
        height: "170",
        dataFormat: "json",
        dataSource
      }).render();
    }
  }

  cambio() {
    const { data, socket, permisos, usuario, pedir_pass } = this.props;
    const { dlgid } = data;
    const { pass } = this.state;

    var hasheado = "";

    if (permisos !== "ADMIN") {
      this.props.changeState({
        errorPermiso: true
      });
      return null;
    }

    // reviso la contraseña
    if (pass == "" && pedir_pass) {
      this.setState({
        pass_err: true,
        pass_msg: "Debes ingresar la contraseña para guardar los cambios."
      });
      return null;
    } else {
      // hasheo contraseña
      hasheado = AES.encrypt(pass, usuario.usuario).toString();
    }

    this.props.changeState({
      conexion: true,
      mensaje: "Actualizando..."
    });
    var parametros = {
      cambios: [],
      sistema: this.props.match.params.id,
      password: hasheado
    };

    // // agrego los datos a la query para hacer los cambios
    var datos = "L_MIN_ALARM, L_MAX_ALARM".split(", ");
    var estado = "inf, sup".split(", ");
    estado.forEach((dato, i) => {
      if (this.state[dato] != data[datos[i]]) {
        parametros.cambios.push({
          dlgid,
          key: datos[i],
          value: this.state[dato]
        });
      }
    });

    // hago el envio de los datos
    const oldOnmessage = socket.onmessage;

    if (socket) {
      socket.send(
        JSON.stringify({
          parametros,
          evento: "sistema.update"
        })
      );

      socket.onmessage = e => {
        var data = JSON.parse(e.data);
        console.log(data);
        this.props.changeState({
          conexion: false,
          mensaje: ""
        });
        if (data.evento == "sistema.update") {
          if (data.response == "ok") {
            this.setState(
              {
                pass_err: false,
                pass_msg: "",
                pass: "",
                cambio: false
              },
              () => {
                this.props.changeState({ actualizado: true });
              }
            );
          } else if (data.response == "password_error") {
            this.setState({
              pass_err: true,
              pass_msg:
                pass == ""
                  ? "Ingresa tu contraseña para aplicar los cambios."
                  : "Contraseña incorrecta, vuelva a intentarlo."
            });
          } else {
            this.setState({
              pass_err: true,
              pass_msg: "No se pudo guardar los cambios, vuelva a intentarlo."
            });
          }
        }

        socket.onmessage = oldOnmessage;
      };
    }
  }

  handleInputs(e) {
    const { permisos } = this.props;
    if (permisos !== "ADMIN") {
      this.props.changeState({
        errorPermiso: true
      });
      return null;
    }
    var cambio = false;
    var variable = e.target.name;
    var valor = e.target.value;
    const {
      L_MIN_ALARM,
      L_MAX_ALARM,
      LMIN_TQ,
      LMAX_TQ,
      H_MAX_TQ
    } = this.props.data;
    const { inf, sup } = this.state;
    // pongo los botones de cambio si los datos actuales son
    // distintos a los de la base

    if (variable == "inf" && parseFloat(valor) > parseFloat(LMIN_TQ)) {
      valor = LMIN_TQ;
    }
    if (variable == "sup" && parseFloat(valor) < parseFloat(LMAX_TQ)) {
      valor = LMAX_TQ;
    }

    if (parseFloat(valor) < 0) {
      valor = 0;
    }
    if (parseFloat(valor) > parseFloat(H_MAX_TQ)) {
      valor = H_MAX_TQ;
    }

    switch (variable) {
      case "inf":
        if (parseFloat(valor) != L_MIN_ALARM || sup != L_MAX_ALARM) {
          cambio = true;
        }
        break;
      case "sup":
        if (parseFloat(valor) != L_MAX_ALARM || inf != L_MIN_ALARM) {
          cambio = true;
        }
        break;

      default:
        cambio = true;
        break;
    }

    this.setState({
      [variable]: valor !== "" ? parseFloat(valor) : "",
      cambio
    });
  }

  buttonInputs(tipo, variable) {
    const { permisos } = this.props;
    // si no tengo permisos entonces muestro cartel de error
    if (permisos !== "ADMIN") {
      this.props.changeState({
        errorPermiso: true
      });
      return null;
    }
    // dependiendo del tipo que llega como parametro, resto o sumo
    var numero = tipo ? 0.1 : -0.1;

    var valor = parseFloat(this.state[variable]) + numero;
    // si tiene muchos numeros despues de la coma lo parseo
    // para que quede con 2 decimales
    if (`${valor}`.length > 4) {
      valor = parseFloat(valor.toFixed(2));
    }

    // pongo los botones de cambio si los datos actuales estan
    // por fuera de los limites
    var cambio = false;
    const {
      L_MIN_ALARM,
      L_MAX_ALARM,
      LMAX_TQ,
      LMIN_TQ,
      H_MAX_TQ
    } = this.props.data;
    const { inf, sup } = this.state;

    if (variable == "inf" && parseFloat(valor) > parseFloat(LMIN_TQ)) {
      valor = LMIN_TQ;
    }
    if (variable == "sup" && parseFloat(valor) < parseFloat(LMAX_TQ)) {
      valor = LMAX_TQ;
    }

    // el numero no puede ser negativo ni mayor al maximo del tanque
    if (valor < 0) {
      valor = 0;
    }
    if (valor > parseFloat(H_MAX_TQ)) {
      valor = H_MAX_TQ;
    }

    switch (variable) {
      case "inf":
        if (parseFloat(valor) != L_MIN_ALARM || sup != L_MAX_ALARM) {
          cambio = true;
        }
        break;
      case "sup":
        if (parseFloat(valor) != L_MAX_ALARM || inf != L_MIN_ALARM) {
          cambio = true;
        }
        break;

      default:
        cambio = true;
        break;
    }

    this.setState({
      [variable]: parseFloat(valor),
      cambio
    });
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  graficar(dato) {
    const { ubicacion_id } = this.props.data;
    // paso los datos para graficar
    var data = {
      medida: dato,
      sistema: this.props.match.params.id,
      ubicacion: ubicacion_id
    };
    this.props.graficar(data);
  }

  toggleAlarma() {
    this.setState(
      {
        limite_change: false
      },
      () => {
        if (document.querySelector("#controles-alarmas")) {
          document
            .querySelector("#controles-alarmas")
            .scrollIntoView({ behavior: "smooth" });
        }
      }
    );
  }

  // input contraseña
  handleChange(e) {
    this.setState({
      pass: e.target.value
    });
  }

  render() {
    if (!this.props.data) {
      return null;
    }
    const { white, data, permisos, pedir_pass } = this.props;
    const {
      id,
      altura,
      altura_max,
      sup,
      inf,
      cambio,
      visible,
      limite_change,
      mostrado,
      pass,
      pass_err,
      pass_msg
    } = this.state;
    // calculo el porcentaje
    var porcentaje = (parseFloat(altura) * 100) / parseFloat(altura_max);

    const {
      LAST_FECHA_DATA,
      ubicacion_direccion,
      ERR_SENSOR_TQ,
      TX_ERROR,
      H_TQ,
      H_MAX_TQ,
      BAT_TQ,
      PWR_SAVE
    } = data;

    var hayNiveles = "L_MIN_ALARM" in data && "L_MAX_ALARM" in data;

    var error =
      parseFloat(H_TQ) > parseFloat(sup) || parseFloat(H_TQ) < parseFloat(inf);
    // si no traigo datos entonces solo muestro el error
    if (!"H_TQ" in data || !"H_MAX_TQ" in data) {
      return (
        <div className="elemento">
          <div className="titulo">
            <p>{ubicacion_direccion}</p>
            <div className={`data ${TX_ERROR}`}>
              {LAST_FECHA_DATA}{" "}
              {TX_ERROR == "SI" ? (
                <i className="fa fa-exclamation-triangle" />
              ) : (
                  <i className="fas fa-wifi" />
                )}
              <Bateria data={BAT_TQ} falla={false} />
            </div>
          </div>
          <div className="content">
            <div className="txerror">
              <h4>
                <i className="fa fa-exclamation-triangle" /> No hay datos para
                mostrar
              </h4>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="elemento" id="controles-alarmas">
        {limite_change && (
          <div className="out-limit">
            <div className="bg" />
            <div className="cuadro noSub">
              <i
                className="fas fa-times"
                onClick={this.toggleAlarma.bind(this)}
              />
              <h4>Alarma fuera de límite</h4>
            </div>
          </div>
        )}
        <div
          className={`titulo ${PWR_SAVE == "SI" ? "pwrsave" : ""}`}
          title={PWR_SAVE == "SI" ? "Modo ahorro" : ubicacion_direccion}
        >
          <p className={`${BAT_TQ ? "corto" : "largo"}`}>
            {ubicacion_direccion}
          </p>
          <div className="data m5em">
            {LAST_FECHA_DATA}{" "}
            {TX_ERROR == "SI" ? (
              <i className="fa fa-exclamation-triangle" />
            ) : (
                <i className="fas fa-wifi" />
              )}
            {BAT_TQ && (
              <span
                onClick={this.graficar.bind(this, "BAT_TQ")}
                style={{ cursor: "pointer" }}
              >
                <Bateria data={BAT_TQ} falla={true} />
              </span>
            )}
          </div>
        </div>
        <div className="content">
          {PWR_SAVE == "SI" && <div className="power-save">Modo ahorro</div>}

          <div className="row">
            {ERR_SENSOR_TQ != "SI" && (
              <div className="col-sm-6">
                <div
                  id={id}
                  className="tank"
                  onClick={this.graficar.bind(this, "H_TQ")}
                />
              </div>
            )}
            <div className={`col-sm-${ERR_SENSOR_TQ == "SI" ? "12" : "6"}`}>
              <div className={`cuadro tanque ${error ? "fueralim" : ""}`}>
                <div className="subTitle">Nivel de agua</div>
                {/* si hay error muestro cartel de error, sino los datos */}
                {ERR_SENSOR_TQ === "SI" ? (
                  <div className="sensorError">
                    <i className="fas fa-exclamation-triangle" />{" "}
                    <p>Error del sensor</p>
                  </div>
                ) : (
                    <React.Fragment>
                      <div
                        className={`data ${error ? "error" : ""}`}
                        onClick={this.graficar.bind(this, "H_TQ")}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="value">
                          {formatNumber.new(parseFloat(altura).toFixed(2))}{" "}
                          <div className="unit">mts</div>
                        </div>
                      </div>
                      {!isNaN(porcentaje) && (
                        <div
                          className={`data ${error ? "error" : ""}`}
                          onClick={this.graficar.bind(this, "H_TQ")}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="value">
                            {formatNumber.new(porcentaje.toFixed(2))}{" "}
                            <div className="unit">%</div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  )}
              </div>
            </div>

            {/* toggle con los controles de alerta */}
            {hayNiveles && (
              <div className="col-12">
                <div
                  className={`cuadro limite ${
                    error || mostrado ? "alerta" : ""
                    }`}
                  style={{
                    paddingTop: visible ? "" : ".8em"
                  }}
                >
                  <div
                    className={`subTitle ${
                      error || mostrado ? "alerta" : "limite"
                      }`}
                    style={{
                      display: visible ? "" : "none"
                    }}
                  >
                    <i className="fas fa-exclamation-triangle" /> Límites
                  </div>

                  {/* <i
                      className={`fas fa-plus ${visible ? "visible" : ""}`}
                      onClick={this.toggle.bind(this)}
                    /> */}
                  {permisos == "ADMIN" && (
                    <div className={`button_toggle ${visible ? "visible" : ""}`} onClick={this.toggle.bind(this)}>
                      <i
                        className={`${visible ? "fas fa-times" : " fas fa-cog"} `}

                      />
                    </div>
                  )}
                  {/* datos ocultos */}
                  <div
                    className="datosOcultos"
                    style={{
                      display: !visible ? "" : "none"
                    }}
                  >
                    <p className="modo">
                      Alarmas{" "}
                      <span className="d-none d-sm-inline-block">:</span>{" "}
                    </p>
                    <p className="niveles">
                      Superior:{" "}
                      <span className="valor">{sup || "No definida"}</span>{" "}
                      Inferior:{" "}
                      <span className="valor">{inf || "No definida"}</span>
                    </p>
                  </div>
                  {/* resto de datos */}
                  {permisos == "ADMIN" && (
                    <div
                      className="cuadroControl"
                      style={{
                        display: visible ? "" : "none"
                      }}
                    >
                      <InputsNiveles
                        handleInputs={this.handleInputs.bind(this)}
                        buttonInputs={this.buttonInputs.bind(this)}
                        white={white}
                        sup={sup}
                        inf={inf}
                        tipo={"Alarma"}
                        unidad={"mts"}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {mostrado && (
              <div className="cuadro noSub fueralim">
                <p className="fuera-limite">Configuración fuera del límite</p>
              </div>
            )}
            {error && (
              <div className="col-12">
                <div className="cuadro noSub fueralim noanim">
                  <p className="fuera-limite">Altura fuera del límite</p>
                </div>
              </div>
            )}

            {cambio && (
              <div className="col-12">
                <BotonesAplicar
                  actualizarDatos={this.actualizarDatos.bind(this)}
                  cambio={this.cambio.bind(this)}
                  pass={pass}
                  handleChange={this.handleChange.bind(this)}
                  pass_err={pass_err}
                  pass_msg={pass_msg}
                  tipo="tanque"
                  white={white}
                  pedir_pass={pedir_pass}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  currentSector: store.mainReducer.currentSector,
  token: store.mainReducer.token,
  socket: store.mainReducer.socket,
  permisos: store.mainReducer.permisos,
  usuario: store.mainReducer.usuario,
  pedir_pass: store.mainReducer.pedir_pass
});

export default connect(
  mapStateToProps,
  { changeState }
)(Tanque);
