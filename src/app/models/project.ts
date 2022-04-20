export class Project {
    name! : string;
    location! : string;
    client!: string;
    createdAt!: Date;
    description! : string;
    reglements! : File;
    cadastre! : File;
    contextDocs! : File;    
    collaborators! : File;
    logNotes! : File;
    autorisationDossier! : File;
    plansOriginals! : File;
    plansAutoCad! : File;
    plansRhino! : File;
    plansPDF! : File;
    imgClient! : File;
    imgClientIdeas! : File;
    imgPhotos! : File;
    imgInspiration! : File;    
}