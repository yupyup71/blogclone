type Props = {
params: {project : string} //이해 필요
}

import { getProject } from "@/sanity/sanity-utils";

export default async function Project( {params} : Props ){ //이해함 {params를 변수로 받을거고, 이 변수의 type은 Props}
 
    const slug = params.project; //이해함 (params 객체의 project??? 값을 slug로 함)
    const project = await getProject(slug);     //이해함 (project를 slug를 이 파일명으로 가지고 오는 것)

    return <div>{project.name}</div>
}