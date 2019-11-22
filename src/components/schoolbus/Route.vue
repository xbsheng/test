<template>
  <div>
    <el-card>
      <div class="route">
        <div class="station">
          <div class="station_circle"></div>
          <div class="station_line"></div>
          <el-tooltip
            class="item"
            effect="dark"
            content="银荷大厦站点1"
            placement="top"
          >
            <div class="station_title">
              银荷大厦站点1
            </div>
          </el-tooltip>
        </div>
        <div class="station">
          <div class="station_circle"></div>
          <div class="station_line"></div>
          <div class="station_title">银荷大厦站点</div>
        </div>
        <div class="station">
          <div class="station_circle"></div>
          <div class="station_line"></div>
          <div class="station_title">银荷大厦站点</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.route {
  display: flex;
  flex-direction: row;
}
.station {
  position: relative;
  width: 20%;
  height: 60px;
  background-color: #29b8db;
  .station_circle {
    position: absolute;
    bottom: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: aquamarine;
    z-index: 2;
  }
  .station_line {
    position: absolute;
    bottom: 17px;
    left: 5px;
    width: calc(100% - 5px);
    height: 6px;
    background-color: greenyellow;
  }
  .station_title {
    position: absolute;
    left: 45px;
    bottom: 25px;
    width: 90px;
    font-size: 14px;
    transform: rotate(-10deg);
    transform-origin: left bottom;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
