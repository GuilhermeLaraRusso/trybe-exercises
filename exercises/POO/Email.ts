class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(from: string, to: string, message: string, subject: string) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  get content(): string {
    return `
      From ${this._from} to ${this._to}
      Subject: ${this._subject}
      Message: ${this._message}  
    `;
  }
}

class MailList {
  // Essa sintaxe no constructor é chamada `Parameter Properties`
  // https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties
  // É um atalho para declarar eautomaticamente atribuir o valor que serpa recebido via parâmetro ao atributo privado
  constructor(private mailList: Email[] = []) { }
    
    get all(): Email[] {
      return this.mailList;
    }

    getEmailsSentBy(mailsAddress: string): Email[] {
      return this.mailList.filter((email) => email.from === mailsAddress);
    }

    getEmailsTo(mailAddress: string): Email[] {
      return this.mailList.filter((email) => email.to === mailAddress);
    }

    getEmailsBySubject(searchString: string): Email[] {
      return this.mailList.filter((email) => email.subject.indexOf(searchString) !== -1);
    }

    addEmail(newMail: Email): void { this.mailList.push(newMail); }

    removeEmail(mailToRemove: Email): void {
      // note que como essa é umacomparaçãp de objetos, esse filter só funcionará se a referência de 'email' e 'mailToRemove' forem iguais
      this.mailList = this.mailList.filter((email) => email !== mailToRemove);
    }
    
}