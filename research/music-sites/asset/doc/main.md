Contoh animasi infinite:
```css
.wrapper-ipad {
    margin: auto;
    padding: 0;
}

.wrapper-inner-ipad {
    width: 50%;
    vertical-align: middle;
}

.ipad-images img {
    animation-duration: 10s;
    animation-name: slideAnimate;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes slideAnimate {
    from {
        margin-left: 100%;
        width: 300%;
    }
    to {
        margin-left: 0%;
        width: 100%;
    }
}
```

element html yang digunakan:
```html
<div id="wrapper-ipad">
    <div class="wrapper-inner-ipad">
        <div class="ipad-images">
            <img src="name-file-images.png" alt="ipad">
        </div>
    </div>
</div>
```

Melakukan rotasi dengan transform:
```css
.name-class { 
    transform: rotateX(3.14rad); 
}
```
Short hand untuk animasi:
```css
.name-class { 
    animation: 10s slideAnimate alternate infinite; 
}
```