const dialog = document.getElementById('dialogbox');
const blur = document.getElementById('blur');

function openDialog() {
  dialog.style.display = 'flex';
  dialog.style.animation = 'showDialog 0.25s alternate ease-in-out';
  blur.style.display = 'block';
}

function closeDialog() {
  let delay = 0.25;
  dialog.style.animation = `closeDialog 0.25s alternate ease-in-out`;
  blur.style.display = 'none';
  setTimeout(() => {
    dialog.style.display = 'none';
  }, (delay * 1000) - 100);
}