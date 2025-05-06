<html>

<head>
    <title>Zomato</title>
    <style>
        main {
            grid-template-rows: 100px 80px repeat(6, 40px) 80px;
            grid-template-columns: 25% 50% 25%;
            display: grid;

        }
        
        #txt1 {
            margin-top: 200px;
            margin-left: 450px;
        }


        .mn {
            font-size: 20px;
            margin-left: 150px;
            width: 600px;
            height: 50px;
            border-radius: 10px;

        }

        #divlog {
            margin-left: 1180px;
            margin-top: -60px;
            font-size: 20px;
            width: 1400px;
            z-index: 1;
            position: relative;
            color: #dfd4d4;


        }

        #divsign {
            margin-left: 50px;
            font-size: 20px;

        }

        #lbl3 {
            font-size: 20px;
        }

        .d1 {

            grid-row: 1/2;
            grid-column: 1/4;
            height: 1000px;
            width: 100%;
            font-family: Arial Rounded MT Bold;
            font-size: 25px;
            z-index: 1;
            position: relative;


        }


        .d2 {

            grid-row: 2/3;
            grid-column: 1/4;
            height: 40px;
            width: 100%;
            font-family: Arial Rounded MT Bold;
            margin-left: 10px;
            margin-top: -10px;
            font-size: 25px;
            z-index: 1;
            position: relative;
        }

        .d3 {
            grid-row: 3/4;
            grid-column: 1/4;
            height: 50px;
            width: 100%;
            margin-top: -130px;
            margin-left: 10;
            z-index: 1;
            position: relative;
        }

        .d4 {
            grid-row: 4/5;
            grid-column: 1/4;
            height: 100px;
            width: 35%;
            margin-top: 100px;
            margin-left: 10;
            border: 2px;

        }

        .d5 {
            margin-top: 550px;
            margin-left: -1050px;
            width: 100%;
        }

        .dd {
            margin-top: 480px;
            margin-left: -350px;
            width: 80%;
            height: 20px;

        }

        .d6 {
            margin-top: 730px;
            margin-left: 55px;
            width: 100%;
        }


        .img1 {
            margin-left: 60px;
        }

        .img2 {
            margin-left: 100px;
        }

        .img3 {
            margin-left: 120px;
        }

        .img4 {
            margin-left: 140px;
        }

        .img5 {
            margin-left: 150px;
        }

        .img6 {
            margin-left: 210px;
        }

        .d7 {
            margin-left: -350px;
            margin-top: 500px;


        }

        .d8 {
            margin-top: 870px;
            margin-left: -1050px;
            width: 100%;
        }

        .d9 {
            margin-top: 1000px;
            margin-left: -320px;
            width: 100%;
        }

        .d10 {
            margin-top: 1070px;
            margin-left: -1070px;
            width: 100%;
        }

        .im1 {

            text-align: center;
            height: 30px;
            width: 150px;
        }

        .im2 {
            margin-left: 650px;
            text-align: center;
            height: 30px;
            width: 340px;
        }

        .im3 {

            text-align: center;
            height: 30px;
            width: 120px;
        }

        .im4 {

            text-align: center;
            height: 30px;
            width: 340px;
        }

        .im5 {

            text-align: center;
            height: 30px;
            width: 160px;
        }

        .im6 {

            text-align: center;

        }

        .img7 {
            margin-left: 60px;
        }

        .img8 {
            margin-left: 100px;
        }

        .img9 {
            margin-left: 120px;
        }

        .img10 {
            margin-left: 140px;
        }

        .img11 {
            margin-left: 150px;
        }

        .img12 {
            margin-left: 210px;
        }

        #btnminus {
            margin-left: 80px;
            width: 50px;
            height: 40px;
        }

        #btnplus {
            margin-left: 40px;
            margin-top: -40px;
            width: 50px;
            height: 40px;
        }

        #lbl0 {
            margin-left: 40px;
            font-size: 20px;
            background-color: #fff;
            width: 50px;
            height: 40px;
        }
        #lbl1 {
            margin-left: 40px;
            font-size: 20px;
            background-color: #fff;
            width: 50px;
            height: 40px;
        }
        #lbl2 {
            margin-left: 40px;
            font-size: 20px;
            background-color: #fff;
            width: 50px;
            height: 40px;
        }
        #lbl3 {
            margin-left: 40px;
            font-size: 20px;
            background-color: #fff;
            width: 50px;
            height: 40px;
        }
        #lbl4 {
            margin-left: 40px;
            font-size: 20px;
            background-color: #fff;
            width: 50px;
            height: 40px;
        }




        .nilu {
            color: white;
            z-index: 1;
            position: relative;
            margin-left: 570px;
            margin-top: -170px;
            width: 590px;
            height: 100px
        }

        .subh {
            color: white;
            margin-left: 1240px;
            margin-top:-40px;
            width: 200px;
            height: 20px;
            z-index: 1;
            position: relative;
        }
        .subhu {
            color: white;
            margin-left: 1350px;
            margin-top:-20px;
            width: 200px;
            height: 20px;
            z-index: 1;
            position: relative;
        }
        .big
        {
            margin-top: 120px;
            margin-left: 450px;
            z-index: 1;
            position: relative;
            width: 900px;
            height: 20px;
        }

    </style>
    <script>
        rname = ["blue diamond", "Jiva", "Lions Pride"]
        rimage = ["Zomato/bluediamond.jpeg", "Zomato/jivarestro.jpg", "Zomato/lions pride.jpeg"]
        fname = [["Biryani By Kilo", "Hakka Noodles", "Dashing Dosa", "Chiken 65", "Chole Bhature"],
        ["Veg Momos", "Electric Shock", "Sahi paneer", "Malai Kofta", "Hot dog"],
        ["Biryani Murg Masala", "Itli sambhar", "Chilli fry", "Faluda", "chat"]]
        fimg = [["Zomato/biryani.jpg", "Zomato/hakka noddles.jpeg", "Zomato/dosa.jpg", "Zomato/chicken.jpg", "Zomato/cholebbhature.jpg"],
        ["Zomato/momo.jpeg", "Zomato/drink.jpeg", "Zomato/paneer.jpg", "Zomato/malaikofta.jpg", "Zomato/hotdog.jpg"],
        ["Zomato/biryani murg masala.jpeg", "Zomato/itli.jpeg", "Zomato/chilli.jpeg", "Zomato/faluda.jpeg", "Zomato/chat.jpeg"]]
        frate = [["Rs.250", "Rs.300", "Rs. 400", "Rs. 450", "Rs. 800"],
        ["Rs.200", "Rs.150", "Rs. 100", "Rs. 990", "Rs. 850"],
        ["Rs.50", "Rs.20", "Rs. 330", "Rs. 550", "Rs. 600"]]

        function searchres() {

            s = document.getElementById("txt1").value;
            for (i = 0; i < 3; i++) {
                if (rname[i] == (s)) {
                    document.getElementById("restaurantimg").src = rimage[i];
                    i = i + 1;
                }
            }
        }

        function plus(n) {
            
            ctr =parseInt(document.getElementById("lbl" + n).innerHTML)
            ctr = ctr + 1;
            document.getElementById("lbl" + n).innerHTML = ctr;
        }


        function minus(n) {
            ctr = parseInt(document.getElementById("lbl" + n).innerHTML);
            ctr = ctr - 1;
            document.getElementById("lbl" + n).innerHTML = ctr;

        }
    </script>
</head>

<body bgcolor="black">

    <main>
        <div class="d1">
            <h1 style="margin:20px"><i>
                    <font color="white"></font>
                </i></b> <input id="txt1" class="mn" TYPE="TEXT" placeholder=" search for Restaurant,cuisine or a dish"
                    onkeyup="searchres()"></input> </h1>
        </div>
        <div > 
            <div class="d11">
                </h1>
            </div>

            <div class="d2"> <label Id="lblt">
                    <font color="white" size="3px">Home &nbsp &nbsp/ &nbsp &nbsp India / &nbsp &nbspJamshedpur / &nbsp
                        &nbsp Restaurants</font>
                </label></div>



            <div class="d3">
                <table height="50px" width="450px">
                    <tr>
                        <td><img src="Zomato/dining.jpg"
                                style="width:30px; height:30px;margin-top:-60px;margin-left:-5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <font color="white">Dining
                                Out</font>
                        </td>
                        <td><img src="Zomato/delaviry.jpg"
                                style="width:30px; height:30px;margin-top:-60px;margin-left:-50px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <font color="white">Delivery</font>
                        </td>
                        <td><img src="Zomato/nightlife.jpg"
                                style="width:30px; height:30px;margin-top:-90px;margin-left:-2px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <font color="white">Nightlife</font>
                        </td>
                       

                    </tr>
                </table><br>
            </div>
            <div class="d4">


                <div CLASS="nilu" style="font-size:100px;"><I>Zomato</I></div>
                <div CLASS="subh" style="font-size:20px;"><I><b>login up</b></I></div>
                <div CLASS="subhu" style="font-size:20px;"><I><b>sign up</b></I></div>

                <div CLASS="big" style="font-size:30px; color:white"><I><b>Discover the best food and drinks in Jamshedpur</b></I>
                </div>


            </div class="lbl6">
            <label>
                <image src="Zomato/background.jpg" id="restaurantimg" style="width:1450px; height:510px"></image>
            </label>
        </div>
        <div class="dd">
            <font size="5px" size=5px color="white"><b>&nbsp &nbsp &nbsp &nbsp Inspiration for your first order</b>
            </font>
        </div>
        <div class="d5">
            <table width="1400px">
                <tr>
                    <td class="img1"><img src="Zomato/burger.jpg" style="width:200px; height:200px;"></td>
                    <td class="img2"><img src="Zomato/paratha.jpg" style="width:200px; height:200px;"></td>
                    <td class="img3"><img src="Zomato/rool.jpg" style="width:200px; height:200px;"></td>
                    <td class="img4"><img src="Zomato/chicken.jpg" style="width:200px; height:200px;"></td>
                    <td class="img5"><img src="Zomato/cholebbhature.jpg" style="width:200px; height:200px;"></td>
                    <td class="img6"><img src="Zomato/cake.jpg" style="width:200px; height:200px;"></td>
                </tr>
            </table>
        </div>


        <div class="d6">
            <table width="1400px">
                <tr>
                    <td class="im1">
                        <font size=5px color="white"><b>Burger</b></font>
                    </td>
                    <td class="im2">
                        <font size=5px color="white"><b>Alu Paratha</b></font>
                    </td>
                    <td class="im3">
                        <font size=5px color="white"><b>Rool</b></font>
                    </td>
                    <td class="im4">
                        <font size=5px color="white"><b>Chicken</b></font>
                    </td>
                    <td class="im5">
                        <font size=5px color="white"><b>chole bhature</b></font>
                    </td>
                    <td class="im6">
                        <font size=5px color="white"><b>Cake</b></font>
                    </td>
                </tr>
            </table>
        </div>

        <div class="d7"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <font size="5px" color="white">&nbsp; &nbsp; &nbsp; &nbsp; <b>Top brands for you</b></font>
        </div>
        <div class="d8">
            <table width="1400px">
                <tr>
                    <td class="img7"><img src="Zomato/McDonalds.jpg" style="width:200px; height:150px;"></td>
                    <td class="img8"><img src="Zomato/bikanerwaala.jpg" style="width:200px; height:150px;"></td>
                    <td class="img9"><img src="Zomato/haldiram.jpg" style="width:200px; height:150px;"></td>
                    <td class="img10"><img src="Zomato/dominose.jpg" style="width:200px; height:150px;"></td>
                    <td class="img11"><img src="Zomato/kfc.jpg" style="width:200px; height:150px;"></td>
                    <td class="img12"><img src="Zomato/subway.jpg" style="width:200px; height:150px;"></td>
                </tr>
            </table>
        </div><br><br><br><br><br><br>

        <div class="d9">
            <table width="1400px">
                <tr>
                    <td class="im1">
                        <font size=5px color="white"><b>Mc Donald's</b></font>
                    </td>
                    <td class="im2">
                        <font size=5px color="white"><b>Bikanerwaalah</b></font>
                    </td>
                    <td class="im3">
                        <font size=5px color="white"><b>Haldiram's</b></font>
                    </td>
                    <td class="im4">
                        <font size=5px color="white"><b>dominose pizza</b></font>
                    </td>
                    <td class="im5">
                        <font size=5px color="white"><b>KFC</b></font>
                    </td>
                    <td class="im6">
                        <font size=5px color="white"><b>Subway</b></font>
                    </td>
                </tr>
            </table>
        </div>


        <div class="d10">
            <table border="2px" width="1400px">

                <tr>
                    <td align="center">
                        <font size=5px color="white"><b>Item</b></font>
                    </td>
                    <td align="center">
                        <font size=5px color="white"><b>Name</b></font>
                    </td>
                    <td align="center">
                        <font size=5px color="white"><b>Rate</b></font>
                    </td>
                    <td align="center">
                        <font size=5px color="white"><b>Quentity</b></font>
                    </td>
                </tr>



                <tr>
                    <td width="50px"><img src="d:\html\Zomato\sandwhich.avif"
                            style="width:200px; height:150px;border-radius:100%;"></td>
                    <td width="300px" align="center">
                        <font size=5px color="white"><b>Grilled sandwhich</b></font>
                    </td>
                    <td width="300px" align="center">
                        <font size=5px color="white">Rs. 180/-</font>
                    </td>
                        <td width="300px" align="center"> <button id="btnminus" onclick="minus(0)">-</button>
                            <font color="red"><label id="lbl0">0</label></font>
                        <button id="btnplus" onclick="plus(0)">+</button></td>


                </tr>


                <tr>
                    <td width="50px"><img src="Zomato/samosapartyrestro2.jpg"
                            style="width:200px; height:150px;border-radius:100%;"></td>
                    <td width="300px" align="center">
                        <font color="white" size=5px><b>Sahi Samosa</b></font>
                    </td>
                    <td width="300px" align="center">
                        <font size=5px color="white">Rs. 180/-</font>
                    </td>

                    <td width="300px" align="center"><button id="btnminus" onclick="minus(1)">-</button>
                        <font color="red"><label id="lbl1">0</label></font>
                        <button id="btnplus" onclick="plus(1)">+</button>
                    </td>

                </tr>


                <tr>
                    <td width="50px"><img src="Zomato/burger1.jpg"
                            style="width:200px; height:150px;border-radius:100%;"></td>
                    <td width="300px" align="center">
                        <font size=5px color="white"><b>Hot Burger</b></font>
                    </td>
                    <td width="300px" align="center">
                        <font size=5px color="white">Rs. 180/-</font>
                    </td>
                    <td width="300px" align="center"><button id="btnminus" onclick="minus(2)">-</button>
                        <font color="red"><label id="lbl2">0</label></font>
                        <button id="btnplus" onclick="plus(2)">+</button</td>
                </tr>


                <tr>
                    <td width="50px"><img src="Zomato/dosa.jpg" style="width:200px; height:150px;border-radius:100%;">
                    </td>
                    <td width="300px" align="center">
                        <font size=5px color="white"><b>Dashing Dosa</b></font>
                    </td>
                    <td width="300px" align="center">
                        <font size=5px color="white">Rs. 180/-</font>
                    </td>
                    <td width="300px" align="center"><button id="btnminus" onclick="minus(3)">-</button>
                        <font color="red"><label id="lbl3">0</label></font>
                        <button id="btnplus" onclick="plus(3)">+</button</td>
                </tr>


                <tr >
                    <td width="50px"><img src="Zomato/biryani.jpg"
                            style="width:200px; height:150px;border-radius:100%;"></td>
                    <td width="300px" align="center">
                        <font size=5px color="white"><b>Briyani BY Kilo</b></font>
                    </td>
                    <td width="300px" align="center">
                        <font size=5px color="white">Rs. 180/-</font>
                    </td>
                    <td width="300px" align="center"><button id="btnminus" onclick="minus(4)">-</button>
                        <font color="red"><label id="lbl4">0</label></font>
                        <button id="btnplus" onclick="plus(4)">+</button< /td>
                </tr>

            </table>
        </div>

    </main>
</body>

</html>