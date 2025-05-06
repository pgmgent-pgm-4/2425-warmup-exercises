/* 
Multiple choice verbetering:
Schrijf een functie die 2 arrays accepteert als argumenten. 
Beide arrays zijn niet leeg en hebben dezelfde lengte. 
Het eerste array stelt de correcte oplossing voor, het tweede array het antwoord. 
De functie moet de absolute score teruggeven o.b.v. deze puntentelling:
Goed antwoord: +4 // Fout antwoord: -1 // Blanco: 0

Bijvoorbeeld:
	
   Juiste antwoorden  |   Effectief antwoord  | Resultaat         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
*/
export function checkExam(solutions, answers) {
  let score = 0;

  for (let i = 0; i < 4; i++) {
    if (solutions[i] === answers[i]) {
      score += 4;
    } else if (answers[i] === "") {
      score = score;
    } else {
      score -= 1;
    }
  }

  if (score < 0) {
    return 0;
  } else {
    return score;
  }
}
