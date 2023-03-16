const { expect } = require("chai");

it('test_spies', function(){
    var callback = sinon.spy();
    productFunction(callback);
    expect(callback).to.have.been.called();
});