import {fromEvent} from "rxjs";

fromEvent(window, 'click').subscribe(it => {
    alert(111112);
})
