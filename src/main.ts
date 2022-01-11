import "./main.css";
import popup from "./components/popup/popup";
import video from "./components/video/video";

const listItem = document.querySelectorAll("#list li");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    const url = this.dataset.url;
    const title = this.dataset.title;

    //console.log(url , title);

    popup({
      width: "880px",
      height: "556px",
      title,
      pos: "center",
      content(elem) {
        //console.log( elem );
        video({
          url,
          elem,
          autoplay: true,
        });
      },
    });
  });
}
