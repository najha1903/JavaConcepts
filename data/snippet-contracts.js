// Expected compiler diagnostics for intentional errors. A missing method or broken
// wrapper must not accidentally prove a different language rule.
module.exports = {
  'if (1) { }': { diagnostic: 'prob.found.req' },
  'int n; System.out.println(n)': { diagnostic: 'var.might.not.have.been.initialized' },
  '{ int n = 1; } System.out.println(n)': { diagnostic: 'cant.resolve.location' },
  'int r = printScore(10)': { diagnostic: 'prob.found.req', members: 'static void printScore(int score) { }' },
  'java.io.FileReader r = new java.io.FileReader("x")': { diagnostic: 'unreported.exception.need.to.catch.or.throw' },
  'try { } catch (Exception e) { } catch (RuntimeException e) { }': { diagnostic: 'except.already.caught' },
  'switch (2) { case 2: break; case 2: break; }': { diagnostic: 'duplicate.case.label' },
  'int label = switch (2) { case 2 -> 20; }': { diagnostic: 'not.exhaustive' },
  'class Base { Base(int n) { } } class Child extends Base { }': { diagnostic: 'cant.apply.symbol' },
  'class Base { private int n; } class Child extends Base { int get() { return n; } }': { diagnostic: 'report.access' },
  'class Base { public void show() { } } class Child extends Base { protected void show() { } }': { diagnostic: 'override.weaker.access' },
  'class Base { void show() { } } class Child extends Base { @Override void show(int n) { } }': { diagnostic: 'method.does.not.override.superclass' },
  'class Base { } class Child extends Base { void extra() { } } Base b = new Child(); b.extra()': { diagnostic: 'cant.resolve.location.args' }
};
