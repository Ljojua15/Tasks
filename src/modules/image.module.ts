export interface Images {
    imageKey: string;
    url?: string;
}

export interface Header{
    status:boolean;
    data: Images[];
}