async function healer() {

    let key = document.getElementById("key").value;
    let enddate = document.getElementById("date").value
    let today = new Date().toISOString().slice(0, 10);
    if (!key || !enddate) {
        alert("Enter All Fields")
    } else {
        let enddateS = new Date(enddate);
        let todayS = new Date();

        let differenceInMilliseconds = enddateS - todayS;
        let differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

        let raw = `{"ActivationCode":"${btoa(key)}","EndDate":"${enddate}","Item_id":"35762285","StartDate":"${today}","purchasecode":"7b153b71-ea9e-4fe1-ab25-b7ba31b66d60","validDays":${differenceInDays}}`

        raw = btoa(raw)
        document.getElementById("gk").style.display = "block"
        document.getElementById("genkey").innerText = raw
        document.getElementById("nod").innerText = `${differenceInDays} Days Added`
    }
}