<template>
  <div class="container-AddHabilidad">
    <h4>Agregar habilidad</h4>
    <div class="item-Addhabilidad">
      <a @click="dialogFormVisible=true" class="add-icon">
        <i class="el-icon-plus"></i>
      </a>
      <el-dialog title="Agregar Habilidad" :visible.sync="dialogFormVisible">
        <el-form :model="model" :rules="rules" ref="model">
          <el-form-item prop="title">
            <el-input v-model="model.title" placeholder="Nombre de la habilidad" size="medium"></el-input>
          </el-form-item>
          <el-form-item prop="description">
            <el-input
              v-model="model.description"
              placeholder="Descripcion de la habilidad"
              size="medium"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <div class="botones-dialog">
            <el-button id="botonesDialog" @click="dialogFormVisible = false">Cancel</el-button>
            <el-button id="botonesDialog" @click="submitForm('model')" type="primary">Agregar</el-button>
          </div>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { EventBus } from "../../../helpers/event-bus";
export default {
  data() {
    return {
      dialogFormVisible: false,
      addconfirmed:1,
      model: {
        title: null,
        description: null,
        categoryId: 0

      },
      rules: {
        title: {
          required: true,
          message: "nombre habilidad",
          trigger: "blur"
        },
        description: {
          required: true,
          message: "descripcion habilidad",
          trigger: "blur"
        }
      }
    };
  },
  mounted() {
      EventBus.$on("catId", categoryId => {
      this.model.categoryId = categoryId;
    }); 
  },
  methods: {
    submitForm(formName) {
      if (this.model.categoryId > 0) {
        let self = this;
        self.$refs[formName].validate(valid => {
          if (valid) {
            self.$store.state.services.habilityService
              .add(self.model)
              .then(r => {
             EventBus.$emit("agregado",(this.addconfirmed));
                  this.$refs[formName].resetFields();
                self.$notify({
                  title: "Exito",
                  message: "Habilidad registrada",
                  type: "success"
                });
              })
              .catch(e => {
                self.$notify({
                  title: "Error",
                  message: "No se ha podido agregar la habilidad",
                  type: "Error"
                });
              });
            self.dialogFormVisible = false;                   
          } else {
            return false;
          }
        });
      } else {
        this.$notify({
          title: "Error",
          message: "Selecione una categoria",
          type: "Error"
        });
      }
    }
  }
};
</script>
<style>
.container-AddHabilidad {
  margin-top: 20px;
  width: 20%;
  min-width: 200px;
  margin-left: 2%;
}
.container-AddHabilidad h4 {
  text-align: left;
  font-size: 15px;
  color: gray;
}
.item-Addhabilidad {
  background-color: white;
  border-radius: 5px;
  height: 278px;
}
.add-icon {
  cursor: pointer;
}
.add-icon i {
  margin-top: 100px;
  font-size: 30px;
  color: white;
  background-color: rgb(226, 226, 226);

  border-radius: 100%;
  padding: 10px;
}
.add-icon i:hover {
  background-color: #7992f8;
}
.botones-dialog {
  display: flex;
  width: 100%;
}
#botonesDialog {
  width: 100%;
}
</style>



