<script setup>
    import { ref, onMounted } from 'vue'
    import { get_tags, search_projects } from '../helpers/api.js'
    import GalleryComponent from './gallery/GalleryComponent.vue'

    const gallery = ref()
    const tags = ref([])
    const search_string = ref()
    const tag_selector = ref()

    function update_projects(){
        let message = {
            tags: tag_selector.value.value == '0' ? [] : [tag_selector.value.value],
            search_string: search_string.value.value
        }
        search_projects(message)
        .then(data => {
            if(data.ok){
                return data.json()
            }else{
                return null
            }
        })
        .then(data => { if(data) gallery.value.update_projects(data.projects) })
    }

    onMounted(() => {
        get_tags()
        .then(data => {
            if(data.ok){
                return data.json()
            }else{
                return null
            }
        })
        .then(data => {
            if(data){
                data.tags.splice(1,0,{id: 0, name: 'Any'})
                tags.value = data.tags
                let message = {tags: [data.tags[0].id]}
                return search_projects(message)
            }else{
                return null
            }
        })
        .then(data => {
            if(data && data.ok){
                return data.json()
            }else{
                return null
            }
        })
        .then(data => { if(data) gallery.value.update_projects(data.projects) })
    })
</script>

<template>
    <div class="my-projects">
        <div class="my-projects__header">
            <div class="my-projects-header__title">My projects</div>
            <div class="my-projects-header__subtitle">+999 projects</div>
        </div>
        <div class="my-projects__content">
            <div class="my-projects-content__filters">
                    <div class="input-group">
                    <label class="input-group__label">Search project</label>
                    <input @keyup="update_projects" type="text" class="input-group__input" ref="search_string">
                </div>
                <div class="input-group">
                    <label class="input-group__label">Search by tag</label>
                    <select @change="update_projects" class="input-group__input_select" ref="tag_selector">
                        <option v-for="tag in tags" :value="tag.id">{{ tag.name }}</option>
                    </select>
                </div>
            </div>
            <GalleryComponent ref="gallery"></GalleryComponent>
        </div>
        <div class="my-projects-content__other-tools">
            <div class="my-projects-content-other-tools__header">
                <div class="my-projects-content-other-tools-header__title">Tools I've worked with</div>
                <div class="my-projects-content-other-tools-header__subtitle">...in my portfolio or previous jobs/projects</div>
            </div>
            <div class="my-projects-content-other-tools__list">
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Rails</div>
                    <img src="../assets/rails.svg" alt="Rails" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Ruby</div>
                    <img src="../assets/ruby.svg" alt="Ruby" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Vue JS</div>
                    <img src="../assets/vue.svg" alt="Vue JS" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Tailwind CSS</div>
                    <img src="../assets/tailwind.svg" alt="Tailwind CSS" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Android</div>
                    <img src="../assets/android.svg" alt="Android" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Flutter</div>
                    <img src="../assets/flutter.svg" alt="Flutter" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Ionic</div>
                    <img src="../assets/ionic.svg" alt="Ionic" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Laravel</div>
                    <img src="../assets/laravel.svg" alt="Laravel" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Node JS</div>
                    <img src="../assets/node.svg" alt="Node JS" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">PostgreSQL</div>
                    <img src="../assets/postgres.svg" alt="PostgreSQL" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Mysql</div>
                    <img src="../assets/mysql.svg" alt="Mysql" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Pandas</div>
                    <img src="../assets/pandas.svg" alt="Pandas" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">R</div>
                    <img src="../assets/r.svg" alt="R" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Apache Flink</div>
                    <img src="../assets/flink.svg" alt="Apache Flink" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Apache Kafka</div>
                    <img src="../assets/kafka.svg" alt="Apache Kafka" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Docker</div>
                    <img src="../assets/docker.svg" alt="Docker" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Kubernetes</div>
                    <img src="../assets/kubernetes.svg" alt="Kubernetes" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">Amazon Lightsail</div>
                    <img src="../assets/lightsail.svg" alt="Amazon Lightsail" class="my-projects-content-other-tools-list-item__icon">
                </div>
                <div class="my-projects-content-other-tools-list__item">
                    <div class="tooltip">NGINX</div>
                    <img src="../assets/nginx.svg" alt="NGINX" class="my-projects-content-other-tools-list-item__icon">
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>