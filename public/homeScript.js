const newFileButton = document.querySelector('.new-file-wrapper');
const newFolderInput = document.querySelector('.folder-name-input');
newFileButton.addEventListener("click", (e) => {
    newFolderInput.classList.toggle('hide');
})