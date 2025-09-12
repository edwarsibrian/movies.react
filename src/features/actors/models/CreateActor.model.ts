export default interface CreateActorModel {
	actorName: string;
	birthDate: string; // ISO format date string
	picture?: File | string; // Optional profile picture
}