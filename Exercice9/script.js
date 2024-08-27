export default checkAge;

function checkAge(a) {
    if (a < 18) return "Vous êtes mineur.";
    if (a >= 18 && a <= 65) return "Vous êtes majeur.";
    return "Vous êtes senior.";
}
