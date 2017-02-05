import { expect } from 'chai';
import sinon from 'sinon';

describe('example', () => {

  it('should just be true', () => {
    expect(true).to.be.true;
  });

  it('should use sinon', () => {
    const stub = sinon.stub();
    stub();
    expect(stub).to.be.calledOnce;
  });

});
