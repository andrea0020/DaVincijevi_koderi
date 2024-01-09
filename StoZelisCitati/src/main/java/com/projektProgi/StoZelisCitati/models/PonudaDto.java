package com.projektProgi.StoZelisCitati.models;

public class PonudaDto {
    private Long ponuditeljId, knjigaId;
    private int brojPrimjeraka, cijena;

    public PonudaDto() {
    }

    public Long getKnjigaId() {
        return knjigaId;
    }

    public void setKnjigaId(Long knjigaId) {
        this.knjigaId = knjigaId;
    }

    public Long getPonuditeljId() {
        return ponuditeljId;
    }

    public void setPonuditeljId(Long ponuditeljId) {
        this.ponuditeljId = ponuditeljId;
    }

    public int getBrojPrimjeraka() {
        return brojPrimjeraka;
    }

    public void setBrojPrimjeraka(int brojPrimjeraka) {
        this.brojPrimjeraka = brojPrimjeraka;
    }

    public int getCijena() {
        return cijena;
    }

    public void setCijena(int cijena) {
        this.cijena = cijena;
    }
}
