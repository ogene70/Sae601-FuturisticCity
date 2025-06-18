// UserController.js
class UserController {
    constructor(navigate) {
        this.navigate = navigate;
    }

    redirectHome = (datas) => {
        this.navigate('/accueil',{state:datas,replace:true});
    };
    disConnectHome = (datas) => {
        this.navigate('/login',{state:datas,replace:true});
    };

    connection(credentials) {
        fetch('http://vision.test/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            } else {
                console.log(data)
                this.redirectHome(data);  // Redirige avec les données
            }
        })
        .catch(error => console.error('Erreur:', error));
    }

    
    deconnexion(){
       this.disConnectHome("vous avez été déconnecté")
        // fetch('http://vision.test/api/login', {
        //     method: 'Delete',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.message) {
        //     } else {
        //         console.log(data)
        //         this.redirectHome(data);  // Redirige avec les données
        //     }
        // })
        // .catch(error => console.error('Erreur:', error));

    }
}

export default UserController;
