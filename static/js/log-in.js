function login() {/* 가입 정보 가져오는 방법&위치 DB로 전환 필요 */
    if (document.getElementById('id').value === "") {
        alertid('on');
    } else if (document.getElementById("password").value === "") {
        alertpasswordlogin('on');
    } else if (document.getElementById('id').value != JSON.parse(localStorage.getItem(document.getElementById("id").value)).username) {
        alertidfalse('on');
    } else if (document.getElementById('password').value != JSON.parse(localStorage.getItem(document.getElementById("id").value)).password) {
        alertpasswordfalse('on');
    } else {
        window.location.href = '../html/mainBlackBoard.html';
    }
}

function alertid(on) {
    var alertid;
    if (on == 'on') {
        alertid = {
            template: '<alert-id>아이디를 입력하세요</alert-id>'
        };
        new Vue({
            el: '#alertid',
            components: {
                'alert-id': alertid
            }
        });
    } else {
        alertid = {
            template: '<alert-id></alert-id>'
        };
        new Vue({
            el: '#alertid',
            components: {
                'alert-id': alertid
            }
        });
    }
}

function alertidfalse(on) {
    if (on == 'on') {
        var alertid = {
            template: '<alert-id>존재하지 않는 아이디입니다</alert-id>'
        };
        new Vue({
            el: '#alertid',
            components: {
                'alert-id': alertid
            }
        });
    } else {
        alertid = {
            template: '<alert-id></alert-id>'
        };
        new Vue({
            el: '#alertid',
            components: {
                'alert-id': alertid
            }
        });
    }
}


function alertpasswordlogin(on) {
    var alertpasswordlogin;
    if (on == 'on') {
        alertpasswordlogin = {
            template: '<alert-password-login>비밀번호를 입력하세요</alert-password-login>'
        };
        new Vue({
            el: '#alertpasswordlogin',
            components: {
                'alert-password-login': alertpasswordlogin
            }
        });
    } else {
        alertpasswordlogin = {
            template: '<alert-password-login></alert-password-login>'
        };
        new Vue({
            el: '#alertpasswordlogin',
            components: {
                'alert-password-login': alertpasswordlogin
            }
        });
    }
}

function alertpasswordfalse(on) {
    var alertpasswordfalse;
    if (on == 'on') {
        alertpasswordlogin = {
            template: '<alert-password-login>비밀번호가 틀렸습니다</alert-password-login>'
        };
        new Vue({
            el: '#alertpasswordlogin',
            components: {
                'alert-password-login': alertpasswordfalse
            }
        });
    } else {
        alertpasswordlogin = {
            template: '<alert-password-login></alert-password-login>'
        };
        new Vue({
            el: '#alertpasswordlogin',
            components: {
                'alert-password-login': alertpasswordfalse
            }
        });
    }
}



/*회원 가입 코드*/
/*function signup() {
    if (document.getElementById('name').value === "") {
        alertname('on');
    } else if (document.getElementById('usernames').value === "") {
        alertusername('on');
    } else if (document.getElementById('password').value === "") {
        alertpassword('on');
    } else if (document.getElementById('password').value != document.getElementById('confirm').value) {
        alertconfirm('on');
    } else {
        var result = {
            name: document.getElementById('name').value,
            username: document.getElementById('usernames').value,
            password: document.getElementById('password').value
        }
        localStorage.setItem(document.getElementById('usernames').value, JSON.stringify(result))

        /*
        localStorage.setItem(document.getElementById('usernames').value + "-name", document.getElementById('name').value)
        localStorage.setItem(document.getElementById("usernames").value + "-id", document.getElementById("usernames").value);
        localStorage.setItem(document.getElementById("usernames").value + "-password", document.getElementById("password").value);
        window.location.href = '../html/log-in.html';*//*
}
}

function alertname(on) {
var alertname;
if (on == 'on') {
alertname = {
template: '<alert-name>이름을 입력해주세요</alert-name>'
};
new Vue({
el: '#alertname',
components: {
'alert-name': alertname
}
});
} else {
alertname = {
template: '<alert-name></alert-name>'
};
new Vue({
el: '#alertname',
components: {
'alert-name': alertname
}
});
}
}

function alertusername(on) {
var alertusername;
if (on == 'on') {
alertusername = {
template: '<alert-username>아이디를 입력해주세요</alert-username>'
};
new Vue({
el: '#alertusername',
components: {
'alert-username': alertusername
}
});
} else {
alertusername = {
template: '<alert-username></alert-username>'
};
new Vue({
el: '#alertusername',
components: {
'alert-username': alertusername
}
});
}
}

function alertpassword(on) {
var alertpassword;
if (on == 'on') {
alertpassword = {
template: '<alert-password>비밀번호을 입력해주세요</alert-password>'
};
new Vue({
el: '#alertpassword',
components: {
'alert-password': alertpassword
}
});
} else {
alertpassword = {
template: '<alert-password></alert-password>'
};
new Vue({
el: '#alertpassword',
components: {
'alert-password': alertpassword
}
});
}
}

function alertconfirm(on) {
var alertconfirm;
if (on == 'on') {
alertconfirm = {
template: '<alert-confirm>비밀번호를 확인해주세요</alert-confirm>'
};
new Vue({
el: '#alertconfrim',
components: {
'alert-confirm': alertconfirm
}
});
} else {
alertconfirm = {
template: '<alert-confirm></alert-confirm>'
};
new Vue({
el: '#alertconfrim',
components: {
'alert-confirm': alertconfirm
}
});
}
}*/