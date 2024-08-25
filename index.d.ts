// Resource
type ResourceType = "LOGO" | "IMAGE" | "VIDEO" | "LONG_VIDEO" | "CODE" | "PDF";

interface URLResourceData {
	url: string;
	key?: string;
	index?: number;
	altText?: string;
}

type CodingLanguage = "JAVA" | "C" | "PYTHON" | "TEXT";

interface CodeResourceData {
	language: CodingLanguage;
	content: string;
	index?: number;
}

interface Resource {
	id?: string;
	type: ResourceType;
	data: URLResourceData | CodeResourceData;
	applicationId?: string;
	questionId?: string;
	explanationId?: string;
	answerChoiceId?: string;
	examId?: string;
}

type QuestionType = "MULTIPLE_CHOICE" | "FREE_RESPONSE" | "SHORT_ANSWER" | "FILL_IN_BLANK" | "PARENT";

interface ImageResource extends Resource {
	type: "IMAGE" | "LOGO";
	data: URLResourceData;
	file?: File;
}