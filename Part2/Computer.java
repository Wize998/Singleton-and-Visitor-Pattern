public class Computer implements ComputerPart {
    ComputerPart[] parts;
    public Computer(){
    parts = new ComputerPart[] {new Mouse(), new Keyboard(), new Monitor()};
    }
    @Override
    public void accept(ComputerPartVisitor computerPartVisitor) {
    for (int i = 0; i < parts.length; i++) {
    parts[i].accept(computerPartVisitor);
    }
    computerPartVisitor.visit(this);
    }
    }
    public interface ComputerPartVisitor {
    public void visit(Computer computer);
    public void visit(Mouse mouse);
    public void visit(Keyboard keyboard);
    public void visit(Monitor monitor);
    }
    