const prev = (arr) => {
  const firstElement = arr.slice(0, 1);
  return [].concat(arr.slice(1, arr.length), firstElement);
};

const next = (arr) => {
  const lastElement = arr.slice(-1);
  return [].concat(lastElement, arr.slice(0, arr.length - 1));
};

const screanChanger = ({ target }) => {
  const direction = target.classList[1];
  const imgList = [...document.querySelectorAll('.img')];
  const arr = imgList.map((node) => node.attributes[1].value);
  if (direction === 'prev') {
    const imgLinks = prev(arr);
    for (let i = 0; i < imgLinks.length; i += 1) {
      imgList[i].attributes[1].value = imgLinks[i];
    }
  }
  if (direction === 'next') {
    const imgLinks = next(arr);
    for (let i = 0; i < imgLinks.length; i += 1) {
      imgList[i].attributes[1].value = imgLinks[i];
    }
  }
};

const app = () => {
  const buttons = document.querySelectorAll('.btn-nav');
  buttons.forEach((button) => button.addEventListener('click', screanChanger));
}

app();