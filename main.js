function toggleInfo(idx) {
  const info = document.getElementById('info' + idx);
  if (info.style.display === 'none') {
    info.style.display = 'block';
  } else {
    info.style.display = 'none';
  }
}

function toggleMessage() {
  const msg = document.getElementById('message');
  if (msg.style.display === 'none' || !msg.style.display) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
}
