# css-background
background used to define the background effects for elements.
background properties:
a. background-color
    property specifies the background color of an element.
    * example: 
    ```css
    body {
        background-color: lightblue;
    }
    ```

b. background-image
    property spcifies an image to use as the background of an element.
    * example:
    ```css
    body {
       background-image: url("paper.gif");
    }
    ```

c. background-repeat
    property repeats an image both horizontally and vertically
    - background image, repeat horizontally or vertically :
        * example to repeat horizontally: 
        ```css
        body {
            background-image: url("gradient_bg.png");
            background-repeat: repeat-x;
        }
        ```

        * example to repeat vertically:
        ```css
        body {
            background-image: url("gradient_bg.png");
            background-repeat: repeat-y;
        }
        ``` 
    
    - background image set position and no-repeat
        * example to no-repeat
        ```css
        body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
        }
        ```
        
        * example set position
        ```css
        body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
            background-position: right top;
        }
        ```

d. background-attachment
    - background image fixed position
        * example to fixed position
        ```css
        body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
            background-position: right top;
            background-attachment: fixed;
        }
        ```

e. background shorthand property
    the shorthand property for background 
    * example to shorthand 
    ```css
    body {
        background: #ffffff url("img_tree.png") no-repeat right top;
    }
    ```