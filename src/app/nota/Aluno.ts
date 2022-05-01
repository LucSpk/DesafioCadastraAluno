
export class Aluno {
    
    public nome: string;
    public nota01: number = 0;
    public nota02: number = 0;
    private media!: number;
    private situacao!: string;

    constructor(nome: string, nota01: number, nota02: number) {
        this.nome = nome;
        this.nota01 = nota01;
        this.nota02 = nota02;
    }

    public getNome() {
        return this.nome;
    }
    public setNome(nome: string) {
        this.nome = nome;
    }
    public getNota01() {
        return this.nota01;
    }
    public setNota01(nota01: number) {
        this.nota01 = nota01;
    }
    public getNota02() {
        return this.nota02;
    }
    public setNota02(nota02: number) {
        this.nota02 = nota02;
    }
    public getMedia() {
        this.calcMedia();
        return this.media;
    }
    public setMedia(media: number) {
        this.media = media;
    }
    public getSituacao() {
        this.verificaSituacao();
        return this.situacao;   
    }
    public setSituacao(situacao: string) {
        this.situacao = situacao;
    }

    private calcMedia() {
        return this.setMedia((this.nota01 + this.nota02)/2);
    }

    private verificaSituacao () {
         
        if(this.media < 0 || this.media > 10) {
            return this.setSituacao("ERRO!");
        }

        if(this.media >= 7 && this.media <= 10) {
           return this.setSituacao("Aprovado");
        } else if(this.media >= 3 && this.media < 7){
            return this.setSituacao("Recuperação");
        }

        return this.setSituacao("Reprovado");
    }
}