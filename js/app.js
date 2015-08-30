(function(){
   var app = angular.module('EatloApp',['ngAnimate']);
  
var menu = [
    {
        name : "Butter Chicken with Parathas and Salad",
        id : 1,
        price: 120,
        descript:  "The perfect home-style, spicy Punjabi Butter Chicken served with 3 Parathas and a crunchy Salad on the side.",
        image: "img/menu/butter-16-04-2015-12-49-00.jpg",
        imagethumb : "img/non-veg.png",
        type: false 
    },
    
    {
        name : "Pita Triangles with Hummus, Cottage Cheese and Salad",
        id : 2,
        price: 100,
        descript:  " A healthy meal of whole wheat Pita Triangles and creamy Hummus flavoured with spicy Peri Peri. Served with a side of Barbecued Cottage Cheese and a Salad.",
        image: "img/menu/hummus-with-pita-bread3-02-07-2015-16-17-11.png",
        imagethumb : "img/veg.png",
        type: true 
    },
    
    {
        name : "Chicken Fattoush Salad",
        id : 3,
        price: 120,
        descript:  "Try our Middle Eastern Fattoush Salad with Grilled Chicken, Lettuce, Cucumbers, Tomatoes and Grilled Pita Bread bites with a Mint and Cilantro dressing.",
        image: "img/menu/chik_salad-09-04-2015-14-01-34.jpg",
        imagethumb : "img/non-veg.png",
        type: false  
    },
    
    {
        name : "Grilled Chicken with Mashed Potatoes and Veggies",
        id : 4,
        price: 120,
        descript:  "Indulge in this delicious grilled Chicken (1 pc) in Barbecue Sauce with a side of herbed Mashed Potatoes and sautéed Veggies.",
        image : "img/menu/Grilled_Chicken_Breast_web-15-05-2015-05-00-34.png",
        imagethumb : "img/non-veg.png",
        type: false  
    },
    
    {
        name : "Mocha Protein Smoothie",
        id : 5,
        price: 50,
        descript:  "Rich, smooth, creamy and filling, protein-packed smoothie with Peanut Butter and Coffee. Served chilled.",
        image: "img/menu/web_peanut_butter_mocha_protein_smoothie-21-08-2015-10-03-44.jpg",
        imagethumb : "img/veg.png",
        type: true 
    },
    
    {
        name : "Modinagar's Famous Jain Shikanji",
        id : 6,
        price: 30,
        descript:  "Refreshing chilled Shikanji prepared with Lemon Juice and Shikanji Masala from Modinagar's famous Jain Shikanji.",
        image: "img/menu/web_shikanji-02-06-2015-16-38-20.jpg",
        imagethumb : "img/veg.png",
        type: true 
    }
];
   app.controller('MenuController',  function($scope, $http){
       this.products = menu;
        $scope.cart_total = 0;
        $scope.change_category = function (category) {
                $scope.selected_category = category;
                
        };
       
       $scope.select = function (category) {
                $scope.selected = category;
                
        };
       
        $scope.isActive = function (category) {  
            return $scope.selected === category;            
        };
       
        $scope.process = function(selected) {
            $scope.selectedProd = selected;
            var alreadyAdded = false;
            if($scope.cart_items === undefined) {
               $scope.cart_items = [];
                  $scope.cart_items.count = 0;
            }
          
            // Check if the selecte id already exists in the cart
             for( var i =0 ; i< $scope.cart_items.length; i++) {
               // console.log($scope.cart_items[i].id);
                 if($scope.cart_items.length > 0 && selected.id === $scope.cart_items[i].id) {
                    //selected.quantity ++;
                    alreadyAdded = true;
                    $scope.cart_items[i].quantity ++;
                    $scope.cart_items[i].total_price = $scope.cart_items[i].quantity * $scope.cart_items[i].price;
                    $scope.cart_items.count++;
                    $scope.cart_total += $scope.cart_items[i].price;
                 }
            }
            if (!alreadyAdded) {
               selected.quantity = 1;
               $scope.cart_items.push(selected);
               selected.total_price = selected.quantity * selected.price;
                $scope.cart_items.count++ ;
              
                $scope.cart_total += selected.price;
            }
            
           
        };
       
        $scope.change_quantity = function (value, item) {
                if (value === false && item.quantity > 1) {
                    item.quantity--;
                    $scope.cart_total -= item.price;
                    $scope.cart_items.count-- ;
                } else if (value === true) {
                    item.quantity++;
                    $scope.cart_total += item.price;
                    $scope.cart_items.count++;
                    
                }
                item.total_price = item.quantity * item.price;
            
            };
       
        $scope.removeItem = function (index) {
                $scope.cart_total -= $scope.cart_items[index].total_price;
                $scope.cart_items.count = $scope.cart_items.count - $scope.cart_items[index].quantity ;
                $scope.cart_items.splice(index, 1);
               
            };

      
   });
})();   
