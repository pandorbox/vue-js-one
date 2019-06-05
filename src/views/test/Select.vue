<template>
    <div>
        <!-- <Form :model="formItem" ref="formItem" :rules="ruleInline" :label-width="80">
            <FormItem label="完成状态 : " prop="sendValue">
                <Select style="width:200px" v-model="formItem.sendValue">
                    <Option v-for="item in formItem.stateList" :value="item.value" :key="item.value" name="sendValue">{{
                        item.label }}
                    </Option>
                </Select>
                <Select style="width:200px" v-model="formItem.sendValue">
                    <Option v-for="item in formItem.stateList" :value="item.value" :key="item.value" name="sendValue">{{
                        item.label }}
                    </Option>
                </Select>
                <Select style="width:200px" v-model="formItem.sendValue">
                    <Option v-for="item in formItem.stateList" :value="item.value" :key="item.value" name="sendValue">{{
                        item.label }}
                    </Option>
                </Select>
            </FormItem>
        </Form> -->
    </div>
</template>
<script type="text/ecmascript-6">
    // export default {
    //     mounted() {
    //         this.getData();
    //     },
    //     methods: {
    //         /**
    //          * 提交数据
    //          * @param name
    //          */
    //         submit(name) {
    //             this.$refs[name].validate((valid) => {
    //                 if (valid) {
    //                     let temp = {};
    //                     var url = this.ServerIp + this.API.editDemand + "/d_id/" + this.$route.query.d_id;
    //                     var that = this;
    //                     var params = {};
    //                     params.d_create_user = this.formItem.d_create_user;
    //                     params.d_progress = this.formItem.d_progress,
    //                         params.d_status = this.formItem.sendValue,
    //                         params.edit = 1;
    //                     this.modal_loading = true;
    //                     console.log(params.de_enclosure);
    //                     this.$http({
    //                         method: 'post',
    //                         url: url,
    //                         data: params,
    //                     }).then((res) => {
    //                         this.modal_loading = false;
 
    //                         if (res.data.success) {
    //                             that.$Message.success('需求编辑成功');
    //                             this.$refs[name].resetFields();
    //                             //路由跳转
    //                             // this.$router.push({path: '/forumCategoryList'});
    //                         } else {
    //                             that.$Message.error(res.data.result);
    //                         }
    //                     });
    //                 }
    //             });
    //         },
    //     },
    //     data() {
    //         return {
    //             modal_loading: false,
    //             questionImageIsShow: false,
    //             formItem: {
    //                 d_title: "",
    //                 u_phone: "",
    //                 stateList: [
    //                     {
    //                         value: '0',
    //                         label: '待分配'
    //                     },
    //                     {
    //                         value: '1',
    //                         label: '开发中'
    //                     },
    //                     {
    //                         value: '2',
    //                         label: '已完成'
    //                     },
    //                     {
    //                         value: '3',
    //                         label: '停用'
    //                     },
    //                     {
    //                         value: '4',
    //                         label: '已变更'
    //                     }
    //                 ]
    //             }
    //         }
    //     }
    // }
</script>
