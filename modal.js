document.addEventListener('DOMContentLoaded', () => {
    // 여러 팝업을 공통으로 처리하기 위해 querySelectorAll 사용
    const openBtns = document.querySelectorAll('.open-modal-btn');

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // 버튼에 지정된 target 속성으로 어떤 팝업을 열지 구분
            const targetModalId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetModalId);
            
            if (modal) {
                modal.classList.add('active');
            }
        });
    });

    // 닫기 버튼 공통 처리
    const closeBtns = document.querySelectorAll('.modal-close-btn, .modal-cancel-btn');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    // 백드롭 클릭 시 닫기 공통 처리
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});