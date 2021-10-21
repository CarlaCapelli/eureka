let clave: string;
let contador: number = 1;

const contr: string = "eureka";
while (contador <= 3 && clave !== "contr") {
  clave = String(prompt("ingrese su contraseña"));

  if (clave !== contr) {
    console.log("contraseña incorrecta");
  } else {
    console.log("bienvenido");
  }
  contador = contador + 1;
}
