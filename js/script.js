const exportPDFbtn = document.querySelector('#exportPDF');
const areaCv = document.querySelector('#html2pdf');

exportPDFbtn.addEventListener('click', () => {
    generatePDF();
});

function generatePDF() {
    removeBtn();
    html2pdf().from(areaCv).save();
}

function removeBtn() {
    exportPDFbtn.remove();
}
