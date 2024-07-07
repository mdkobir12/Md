<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>open</title>
</head>

<body>




    <form method=”Get”>
        <label for="">name:</label><span ></span>
        <input type="text" required placeholder="place your name...."><br><br>

        <label for="">father's name:</label>
        <input type="text" required placeholder="place your father's name"><br><br>

        <label for="">mather's name:</label>
        <input type="text" required placeholder="place your mother's"><br><br>

        <label for="">NID:</label>
        <input type="" required placeholder="place your nid number"><br><br>

        <label for="">Email:</label>
        <input type="email" required placeholder="your meail addres"><br><br>
        <label for="">number</label>
        <input type="number" required placeholder="Enter a number"><br><br>
     

        <label for="">gender</label><br>
        <input type="radio" id="male" required> <label for="male">male</label>
        <input type="radio"id="female" required> <label for="female">female</label>
        <input type="radio"id="other's" required> <label for="other's">other's</label><br><br>
       
        
        <input type="submit" value="Submit">
        <input type="reset" value="reset">


    </form>

    <h1>
    <?php 
    echo $_GET["name"];
   ?>
    </h1>
   
    <h1>
    <?php 
    echo $_GET["father's nam"];
   ?>
    </h1>
   









</body>

</html>

