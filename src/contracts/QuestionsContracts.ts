export interface IStartQuestionnaire {
    anwers: String[]
}

export class StartQuestionnaireContract implements IStartQuestionnaire {
    anwers: String[];
    constructor(answers: String[]) {
        this.anwers = answers;
    }
}