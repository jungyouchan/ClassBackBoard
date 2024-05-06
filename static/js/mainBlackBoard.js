onload = (e) => {
    document.getElementById("cleaningApplicationForm").addEventListener("submit", (e) => {
        //e.preventDefault();
        console.log(document.getElementById("cleaningApplicationForm").select.value);
    })
    document.getElementById("logInText").addEventListener("click", (e) => {
        e.preventDefault();
    })
    setInterval(jubunChange, 1000);
    addClassNameInSelect();
};



const classMemberName = [
    { number: 10302, name: "김예진" },
    { number: 10303, name: "김지수" },
    { number: 10304, name: "박서현" },
    { number: 10305, name: "박유담" },
    { number: 10306, name: "변지후" },
    { number: 10307, name: "성지윤" },
    { number: 10308, name: "송시현" },
    { number: 10309, name: "이연우" },
    { number: 10310, name: "정예서" },
    { number: 10311, name: "정지우" },
    { number: 10312, name: "채다나" },
    { number: 10313, name: "최수연" },
    { number: 10314, name: "김성재" },
    { number: 10315, name: "김시형" },
    { number: 10316, name: "김이삭" },
    { number: 10317, name: "박민준" },
    { number: 10318, name: "박서준" },
    { number: 10319, name: "박제경" },
    { number: 10320, name: "설영석" },
    { number: 10321, name: "이경민" },
    { number: 10322, name: "이은성" },
    { number: 10323, name: "임강언" },
    { number: 10324, name: "장주헌" },
    { number: 10325, name: "정유찬" },
    { number: 10326, name: "주명준" },
    { number: 10327, name: "최인우" },
    { number: 10328, name: "황성민" }
];

function jubunChange() {
    let standardDay = new Date("2024-03-4"); //기준 시간
    let firstNumber = document.getElementById("firstNumber"); //주번 번호 1
    let secondNumber = document.getElementById("secondNumber"); // 주번 번호 2
    let firstName = document.getElementById("firstName"); // 주번 이름 1
    let secondName = document.getElementById("secondName"); //주번 이름 2
    var firstJubunNumber = 0;
    var nowDay = new Date(); // 현재 시간
    var changeDetect = 0; //변화감지

    var changeTime = Math.floor((nowDay.getTime() - standardDay.getTime()) / 604800000);
    if (changeTime != changeDetect) {
        changeDetect = changeTime;
        firstJubunNumber = changeTime * 2;
        firstNumber.innerText = classMemberName[firstJubunNumber % classMemberName.length].number;
        firstName.innerText = classMemberName[firstJubunNumber % classMemberName.length].name;
        secondNumber.innerText = classMemberName[(firstJubunNumber + 1) % classMemberName.length].number;
        secondName.innerText = classMemberName[(firstJubunNumber + 1) % classMemberName.length].name;
    }
}

function addClassNameInSelect() {
    const cleaningApplication = document.getElementById("cleaningApplication");
    for (var i in classMemberName) {
        cleaningApplication.innerHTML += `<option value="${classMemberName[i].name}">${classMemberName[i].name}</option>`
    }
}
