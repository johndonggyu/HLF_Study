//adminMain
function noElection(option) {
    if (option === 'manage') { //선거 관리하기
        document.location.href = './adminManage.html';
    } else if (option == 'count') { //투표율 확인
        document.location.href = './adminNow.html';
    } else { //투표가 하나라도 개설되지 않았을 경우 팝업
        $('#noElectionModal').modal('toggle');
    }
}

//adminManage
function startElection() {
    $('#exampleModal').modal('hide');
    $('#startElectionModal').modal('toggle');
}

function electionStarted() {
    $('#startElectionModal').modal('hide');
    $('#electionStartedModal').modal('toggle');
}

function deleteElection() {
    $('#exampleModal').modal('hide');
    $('#deleteElectionModal').modal('toggle');
}

function electionDeleted() {
    $('#deleteElectionModal').modal('hide');
    $('#electionDeletedModal').modal('toggle');
}

function modifyElection() {
    document.location.href = './modifyElection.html';
}

function endElection() {
    document.location.href = './adminManage.html?id=2';
}