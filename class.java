import java.util.Scanner;
 
abstract class EmployeeAbst {
    String name;
 
    EmployeeAbst(String name) {
        this.name = name;
    }
 
    abstract void calculateSalary();
}
 
class ftEmp extends EmployeeAbst {
 
    ftEmp(String name) {
        super(name);
    }
 
    @Override
    void calculateSalary() {
        int salaryp = 30000;
        System.out.println(name + " Salary as Full Time Emp is: " + salaryp);
    }
}
 
class ptEmp extends EmployeeAbst {
 
    ptEmp(String name) {
        super(name);
    }
 
    @Override
    void calculateSalary() {
        int hour = 5;
        int rate = 2;
        int salary = hour * rate;
        System.out.println(name + " Salary as a Part Time Emp is: " + salary);
    }
}
 
public class MainCall {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
 
        System.out.print("Enter Full Time Employee name: ");
        String ftName = sc.nextLine();
        ftEmp emp1 = new ftEmp(ftName);
        emp1.calculateSalary();
 
        System.out.print("Enter Part Time Employee name: ");
        String ptName = sc.nextLine();
        ptEmp emp2 = new ptEmp(ptName);
        emp2.calculateSalary();
 
        sc.close();
    }