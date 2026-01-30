<template>
  <div class="container mt-5">
    <div class="row">
      <!-- PHẦN 1: FORM (BÊN TRÁI - Chiếm 4/12 cột) -->
      <div class="col-sm-4">
        <h3 class="mb-4">Thêm học sinh</h3>
        
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Họ tên:</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="student.name" 
              id="name" 
              required
            >
          </div>

          <div class="mb-3">
            <label for="score" class="form-label">Điểm:</label>
            <input 
              type="number" 
              max="10" min="0" 
              class="form-control" 
              v-model="student.score" 
              id="score" 
              required
            >
          </div>

          <div class="mb-3">
            <label for="dob" class="form-label">Ngày sinh:</label>
            <input 
              type="date" 
              class="form-control" 
              v-model="student.dob" 
              id="dob" 
              required
            >
          </div>

          <!-- Nút bấm thay đổi chữ tùy theo đang Thêm hay Sửa -->
          <button type="submit" class="btn btn-success">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
        </form>
      </div>

      <!-- PHẦN 2: DANH SÁCH (BÊN PHẢI - Chiếm 8/12 cột) -->
      <div class="col-sm-8">
        <h3 class="mb-4">Danh sách học sinh</h3>
        
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th></th> <!-- Cột chứa nút bấm -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td class="text-end">
                <button 
                  class="btn btn-warning text-white btn-sm me-2" 
                  @click="editStudent(index)"
                >
                  Sửa
                </button>
                <button 
                  class="btn btn-danger btn-sm" 
                  @click="deleteStudent(index)"
                >
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Dữ liệu mẫu ban đầu
const students = ref([
    { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
    { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// 2. Biến quản lý trạng thái form (Model cho các ô input)
const student = ref({
    name: '',
    score: null,
    dob: ''
});

// 3. Các biến cờ để kiểm soát chế độ Sửa
let isEditing = ref(false);
let editingIndex = ref(null);

// 4. Hàm xử lý khi nhấn nút Thêm/Cập nhật
function submitForm() {
    if (isEditing.value) {
        // --- Logic Cập nhật ---
        // Copy dữ liệu từ form vào danh sách tại vị trí đang sửa
        students.value[editingIndex.value] = { ...student.value };
        
        // Reset trạng thái về thêm mới
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        // --- Logic Thêm mới ---
        // Copy dữ liệu từ form đẩy vào mảng students
        students.value.push({ ...student.value });
    }
    // Xóa trắng form sau khi thực hiện xong
    resetForm();
}

// 5. Hàm chuẩn bị dữ liệu để sửa (đẩy dữ liệu từ dòng lên form)
function editStudent(index) {
    student.value = { ...students.value[index] }; // Copy dữ liệu
    isEditing.value = true;                       // Bật chế độ sửa
    editingIndex.value = index;                   // Lưu vị trí
}

// 6. Hàm xóa học sinh
function deleteStudent(index) {
    if(confirm("Bạn có chắc muốn xóa học sinh này không?")) {
        students.value.splice(index, 1);
    }
}

// 7. Hàm reset form về rỗng
function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    };
}
</script>