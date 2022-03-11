function onSubmit() {
    var score = 0;
    var numOfQuestion = 10;
    var ansArr = ['a', 'b', 'a', 'a', 'c', 'b', 'a', 'c', 'c', 'c'];

    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    var q6 = document.forms['quiz']['q6'].value;
    var q7 = document.forms['quiz']['q7'].value;
    var q8 = document.forms['quiz']['q8'].value;
    var q9 = document.forms['quiz']['q9'].value;
    var q10 = document.forms['quiz']['q10'].value;


    for (var i = 1; i <= numOfQuestion; i++) {
        if (eval('q' + i) == '') {
            alert("Réponse manquante  " + i);
        }
    }
    for (var i = 1; i <= numOfQuestion; i++) {
        if (eval('q' + i) == ansArr[i - i]) {
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = "<h2> Epreuve terminé vous avez " + score + " points  sur " + numOfQuestion + " </h2>"
    alert('Vous avez obtenue  ' + score + '/' + numOfQuestion);
    return false;



}