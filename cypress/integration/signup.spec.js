import signup from '../pages/SignupPage'

describe ('Signup', ()=>{

    /*
    before(function() {
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    })*/

    beforeEach(function() {
        cy.fixture('deliver').then((d)=> {
            this.deliver = d
        })
    })

    /*
    after(function() {
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    })

    afterEach(function(){
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })
    */    

    it('User should be deliver', function() {      
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
})