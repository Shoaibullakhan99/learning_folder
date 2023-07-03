#include <iostream>
using namespace std;

int main() {
    int var = 20;
    int *ip;
    int *p = NULL;

    ip = &var;

    cout << "Value of Var variable: ";
    cout << var << endl;

    cout << "Address stored in ip variable: ";
    cout << ip << endl;

    cout << "Value of *ip variable:  ";
    cout << *ip << endl;

    cout << *p << endl;

    return 0;
    }