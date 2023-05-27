type Props = {
params: {project : string}
}

import { getProject } from "@/sanity/sanity-utils";

export default async function Project( {params} : Props ){

    const slug = params.project; //params 객체의 project key value를 slug로 함
    const project = await getProject(slug);     //이해함 (slug를 이 파일명으로 가지고 오는 것)

    return <div>{project.name}</div>
}