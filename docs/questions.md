Format du fichier questions.json

```json
[
    {
      "level": 1,
      "text": "Quelle est la réponse A ?",      
      "image": "path/to/img.jpg",
      "type": "ONE_ANSWER",
      "answers": ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      "correctAnswer": 0
    }
],
[
    {
      "level": 2,
      "text": "écrire carotte",
      "image": "path/to/img.jpg",
      "type": "SHORT_ANSWER",
      "correctAnswer": "carotte"
    },
    {
      "level": 3,
      "text": "Parmi ces propositions, quelles lettres sont des consonnes ?",
      "image": "path/to/img.jpg",
      "type": "MULTIPLE_ANSWERS",
      "answers": ["A", "B", "C", "D"],
      "correctAnswers": [1,2,3]
    }
]
  
```


<!-- type : uneReponse, choixMultiple, reponseCourte
Une question choixMultiple doit avoir un array de strings "answers" et en "correctAnswer" le chiffre qui correspond à l'index de la réponse correcte 
Une question choixMultiple doit avoir un array de strings "answers" et un array "correctAnswer" de chiffres (index des réponses correctes) -->
