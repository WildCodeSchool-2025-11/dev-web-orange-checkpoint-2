/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(n: number): number[] {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const tableau = [0, 1];
  for (let i = 2; i < n; i++) {
    const avantDernier = tableau[tableau.length - 2];
    const dernier = tableau[tableau.length - 1];
    const nouveauNombre = avantDernier + dernier;
    tableau.push(nouveauNombre);
  }
  return tableau;
}

export default getFibonacciSequence;
