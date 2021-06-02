const productsMock = [
    {
        'id':0,
        'title':'Zapatilla Roja',
        'category':'zapatillas',
        'price': 1999,
        'pictureUrl':'http://staywithme.com.ar/fotos/a29.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        'id':1,
        'title':'Zapato Marrón',
        'category':'zapatos',
        'price':2699,
        'pictureUrl':'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/311/products/img-20200803-wa01451-bd180f9997879370d116052034020616-480-0.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        'id':2,
        'title':'Ojotas',
        'category':'ojotas',
        'price':899,
        'pictureUrl':'https://marcantoniodep.com.ar/uploads/productos/1602772338_NDEzNTEwMjI3MTk=.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        'id':3,
        'title':'Zapatilla Rosa',
        'category':'zapatillas',
        'price': 2199,
        'pictureUrl':'https://image.freepik.com/foto-gratis/zapatos-zapatillas-color-rosa-sobre-fondo-blanco_1339-45650.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        'id':4,
        'title':'Zapato Rojo',
        'category':'zapatos',
        'price':2299,
        'pictureUrl':'https://upload.wikimedia.org/wikipedia/commons/4/45/Red_High_Heel_Pumps.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        'id':5,
        'title':'Ojotas',
        'category':'ojotas',
        'price':899,
        'pictureUrl':'https://marcantoniodep.com.ar/uploads/productos/1602772338_NDEzNTEwMjI3MTk=.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        'id':6,
        'title':'Zapatilla Blanca',
        'category':'zapatillas',
        'price': 2899,
        'pictureUrl':'https://image.freepik.com/foto-gratis/zapatillas-blancas-sobre-fondo-blanco_1339-90483.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        'id':7,
        'title':'Zapato negro',
        'category':'zapatos',
        'price':2999,
        'pictureUrl':'https://www.corbataslester.com/magazine/wp-content/uploads/2018/01/oxford02.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        'id':8,
        'title':'Ojotas',
        'category':'ojotas',
        'price':899,
        'pictureUrl':'https://marcantoniodep.com.ar/uploads/productos/1602772338_NDEzNTEwMjI3MTk=.jpg',
        'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    }

]

export default productsMock;