import React from "react";
import logo from "../assets/Black White Modern Concept Football Club Logo.png";

const Checkout = () => {
  return (
    <div class="contenedor">
      <div class="text-center">
        <img
          class="mb-2 mt-5"
          style={{ borderRadius: 300, maxHeight: "150px", maxWidth: "200px" }}
          src={logo}
          alt=""
        />
        <h2>Ya casi es tuyo!</h2>
        <p>No compartiremos tu informacion de pago con nadie.</p>
      </div>
      <div class="container-for-pay">
        <h4>Direccion: </h4>
        <form action="">
          <div>
            <label for="adress" class="form-label">
              Direccion:{" "}
            </label>
            <input
              id="adress"
              type="text"
              class="form-control"
              placeholder="Ej: Rawson 8833"
              required
            />
            <small>
              Si no completas este campo, tomaremos la direccion que hayas
              ingresado cuando te registraste.
            </small>
          </div>
          <label for="streets" class="form-label mt-3">
            Entre Calles:{" "}
          </label>
          <input
            id="streets"
            type="text"
            class="form-control"
            placeholder="Ej: Mariano Moreno y Avellaneda"
            required
          />
          <label for="postal" class="form-label mt-3">
            Codigo Postal:{" "}
          </label>
          <input
            id="postal"
            type="text"
            class="form-control"
            placeholder="Ej: 1718"
            required
          />
          <label for="ciudad" class="form-label mt-3">
            Ciudad:{" "}
          </label>
          <input
            id="ciudad"
            type="text"
            class="form-control"
            placeholder="Ej: Buenos Aires"
            required
          />
          <label for="received" class="form-label mt-3">
            Nombre Completo de la persona que recibe el paquete:{" "}
          </label>
          <input
            id="received"
            type="text"
            class="form-control"
            placeholder="Ej: Luis Moreno Garcia"
            required
          />
          <hr />

          <h4 class="mt-3 mb-3">Pago: </h4>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="mastercard"
            />
            <label class="form-check-label" for="mastercard">
              Mastercard
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="visa"
            />
            <label class="form-check-label" for="visa">
              Visa
            </label>
          </div>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="maestro"
            />
            <label class="form-check-label" for="maestro">
              Maestro
            </label>
          </div>
          <label for="credit-card" class="form-label">
            Numero de tarjeta (Sin espacios):{" "}
          </label>
          <input
            id="credit-card"
            type="text"
            class="form-control"
            placeholder="Ej: 9999888877776666"
            required
          />

          <label for="name-card" class="form-label mt-3">
            Nombre y Apellido (Como figura en la Tarjeta):{" "}
          </label>
          <input
            id="name-card"
            type="text"
            class="form-control"
            placeholder="Ej: JULIAN G. RAMIREZ"
            required
          />

          <label for="number" class="form-label mt-3">
            Numero Telefonico:{" "}
          </label>
          <input
            id="number"
            type="number"
            class="form-control "
            placeholder="Ej: 11 9999 9999"
            required
          />
          <hr />
          <div
            style={{ display: "flex", justifyContent: "center" }}
            class="mt-3"
          >
            <button type="submit" class="btn btn-dark mb-5">
              Finalizar mi compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
