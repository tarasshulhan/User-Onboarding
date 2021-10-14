describe('App', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000');
    })


    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const pwdInput = () => cy.get('input[name=password]');
    const avtInput = () => cy.get('input[name=avatar]');
    const tOfS = () => cy.get('input[type=checkbox]');
    const sbtBtn = () => cy.get('button');


    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })

    //check everything is showing
    it('the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        pwdInput().should('exist');
        avtInput().should('exist');
        sbtBtn().should('exist');
    })

    describe('Filling out the inputs', () => {
        // We can use optional describe blocks to organize and group our tests
        // Can we navigate to the url
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        // submit button should start out disabled
        it('submit button starts out disabled', () => {
            sbtBtn().should('be.disabled');
        })

        // type in the inputs
        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Name Nameson')
                .should('have.value', 'Name Nameson');
            emailInput()
                .should('have.value', '')
                .type('email@email.com')
                .should('have.value', 'email@email.com');
            pwdInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123');
            avtInput()
                .should('have.value', '')
                .type('https://picsum.photos/150')
                .should('have.value', 'https://picsum.photos/150');
            tOfS()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })

        //check if submit button works when all fields are filled out
        it('submit button enabled when all fields populated', () => {
            nameInput()
                .should('have.value', '')
                .type('Name Nameson')
                .should('have.value', 'Name Nameson');
            emailInput()
                .should('have.value', '')
                .type('email@email.com')
                .should('have.value', 'email@email.com');
            pwdInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123');
            avtInput()
                .should('have.value', '')
                .type('https://picsum.photos/150')
                .should('have.value', 'https://picsum.photos/150');
            tOfS()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            sbtBtn().should('not.be.disabled');
        })

        //check if the form can be submitted and is automatically cleared afterwards
        it('can submit new user and form is cleared', () => {
            nameInput()
                .should('have.value', '')
                .type('Name Nameson')
                .should('have.value', 'Name Nameson');
            emailInput()
                .should('have.value', '')
                .type('email@email.com')
                .should('have.value', 'email@email.com');
            pwdInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123');
            avtInput()
                .should('have.value', '')
                .type('https://picsum.photos/150')
                .should('have.value', 'https://picsum.photos/150');
            tOfS()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            sbtBtn().should('not.be.disabled');
            sbtBtn().click();
            nameInput().should('have.value', '')
            emailInput().should('have.value', '')
            pwdInput().should('have.value', '')
            avtInput().should('have.value', '')
            tOfS().should('not.be.checked')
            sbtBtn().should('be.disabled');
            cy.contains('Name Nameson').should('exist');
        })
    })
})