onload = () => {
    setInterval(jubunChange, 1000)
}



function jubunChange() {
    let classMemberName = [[10302, "김예진"], [10303, "김지수"], [10304, "박서현"], [10305, "박유담"], [10306, "변지후"], [10307, "성지윤"], [10308, "송시현"], [10309, "이연우"], [10310, "정예서"], [10311, "정지우"], [10312, "채다나"], [10313, "최수연"], [10314, "김성재"], [10315, "김시형"], [10316, "김이삭"], [10317, "박민준"], [10318, "박서준"], [10319, "박제경"], [10320, "설영석"], [10321, "이경민"], [10322, "이은성"], [10323, "임강언"], [10324, "장주헌"], [10325, "정유찬"], [10326, "주명준"], [10327, "최인우"], [10328, "황성민"]];
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
        firstNumber.innerText = classMemberName[firstJubunNumber % classMemberName.length][0];
        firstName.innerText = classMemberName[firstJubunNumber % classMemberName.length][1];
        secondNumber.innerText = classMemberName[(firstJubunNumber + 1) % classMemberName.length][0];
        secondName.innerText = classMemberName[(firstJubunNumber + 1) % classMemberName.length][1];
    }
}