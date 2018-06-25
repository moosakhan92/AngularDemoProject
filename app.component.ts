import { Component } from "@angular/core"
import { Z_DEFAULT_STRATEGY } from "zlib";

@Component({
    selector:'my-app',
    template: `<div>
                    <button style="color:green">Green Button</button>
                    <br><br>
                    <button class="colorClass" [class]='classesToApply'> My Button </button>
                    <br><br>
                    <button class="colorClass styleClass sizeClass boldClass"> New Button </button>
                    <br><br>
                    <button class="colorClass" [ngClass]='addClasses()'> New Button </button>
                    <h1>{{pageHeader ? pageHeader : 'No Header'}}</h1>
                    <h1>{{'Full Name = '+fullName()}}</h1>
                    <img src='https://www.stucorner.com/{{imagePath}}'/>
                    <my-employee></my-employee>
                    <button [disabled] = 'isDisabled'> Click Me!</button>
                    <span bind-innerHTML= 'pageHeader'></span>
                    <div [innerHTML]='badHtml'></div>
                </div>`,
})

export class AppComponent{
    classesToApply : string= 'styleClass sizeClass';
    applyBoldClass : boolean = false;
    applyStyleClass : boolean = true;
    addClasses(){
        let classes={
            boldClass: this.applyBoldClass,
            styleClass: this.applyStyleClass
        };
        return classes;
    }
    pageHeader: string = 'Employee Details';
    imagePath: string = 'image/stucornerlogo.png';
    isDisabled: boolean = false;
    badHtml: string= 'Hello <script> alert("Hacked");</script> World';

    firstName: string = 'Tom';
    lastName: string = 'Jerry';

    fullName(): string {
        return this.firstName+' '+this.lastName;
    }
}